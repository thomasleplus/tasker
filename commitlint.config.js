const Configuration = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(commit) => true],
};

export default Configuration;
