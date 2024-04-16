import type { CourseReturn } from '~/types/course';

export const useCourse = async (
  courseSlug: string,
): Promise<Maybe<CourseReturn>> => {
  const { data, error } = await useFetch<CourseReturn>(
    `/api/courses/${courseSlug}`,
  );

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data.value;
};
