const removeEndSlashIfExist = (path) =>
  path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;

export default removeEndSlashIfExist;
