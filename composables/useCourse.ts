import type { CourseReturn } from '~/types/course';

export const useCourse = (courseSlug: string): Promise<Maybe<CourseReturn>> =>
  useFetchWithCache<CourseReturn>(`/api/courses/${courseSlug}`);
