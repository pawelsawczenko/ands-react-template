export const stylizeIndex = (index: number) => {
  return index < 10
    ? `#000${index}`
    : index < 100
      ? `#00${index}`
      : index < 1000
        ? `#0${index}`
        : `#${index}`
}

export const getIndexFromUrl = (url: string) => {
  const urlArr = url.split('/')

  return urlArr[urlArr.length - 2]
}
