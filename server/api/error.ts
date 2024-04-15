export default eventHandler(() => {
  // return 'hello nuxt3!!!';
  // return {
  //   message: 'hello nuxt3!!',
  // };
  throw createError({
    statusCode: 404,
    statusMessage: '페이지를 찾을 수 없습니다.',
  });
});
