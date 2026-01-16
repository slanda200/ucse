import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface Progress {
  id: string;
  subject: string;
  grade: number;
  topic_id: string;
  exercise_id: string;
  exercise_type: string;
  score: number;
  max_score: number;
  completed_at: string;
}

export const useProgress = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProgress();
    } else {
      setProgress([]);
      setLoading(false);
    }
  }, [user]);

  const fetchProgress = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id);
    
    if (!error && data) {
      setProgress(data);
    }
    setLoading(false);
  };

  const saveProgress = async (
    subject: string,
    grade: number,
    topicId: string,
    exerciseId: string,
    exerciseType: string,
    score: number,
    maxScore: number
  ) => {
    if (!user) return;

    const { error } = await supabase.from('user_progress').insert({
      user_id: user.id,
      subject,
      grade,
      topic_id: topicId,
      exercise_id: exerciseId,
      exercise_type: exerciseType,
      score,
      max_score: maxScore,
    });

    if (!error) {
      await fetchProgress();
    }
  };

  const getExerciseProgress = (exerciseId: string) => {
    return progress.filter(p => p.exercise_id === exerciseId);
  };

  const getBestScore = (exerciseId: string) => {
    const exerciseProgress = getExerciseProgress(exerciseId);
    if (exerciseProgress.length === 0) return null;
    
    return exerciseProgress.reduce((best, current) => {
      const currentPercent = (current.score / current.max_score) * 100;
      const bestPercent = (best.score / best.max_score) * 100;
      return currentPercent > bestPercent ? current : best;
    });
  };

  const isExerciseCompleted = (exerciseId: string, threshold = 70) => {
    const best = getBestScore(exerciseId);
    if (!best) return false;
    return (best.score / best.max_score) * 100 >= threshold;
  };

  const getTopicCompletedCount = (topicId: string) => {
    const topicExercises = progress.filter(p => p.topic_id === topicId);
    const uniqueExercises = [...new Set(topicExercises.map(p => p.exercise_id))];
    return uniqueExercises.filter(exId => isExerciseCompleted(exId)).length;
  };

  return {
    progress,
    loading,
    saveProgress,
    getExerciseProgress,
    getBestScore,
    isExerciseCompleted,
    getTopicCompletedCount,
  };
};
