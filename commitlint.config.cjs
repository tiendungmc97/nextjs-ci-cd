module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // Changes related to build or dependencies
        "chore", // Maintenance tasks
        "ci", // Continuous integration changes
        "docs", // Documentation changes
        "feat", // New feature
        "fix", // Bug fix
        "perf", // Performance improvements
        "refactor", // Code refactoring
        "revert", // Reverting commits
        "style", // Code style changes
        "test", // Test-related changes
        "config", // Init config
      ],
    ],
    "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
  },
};
