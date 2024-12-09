const { exec } = require("child_process");

exec(
  "eslint src --ext js,jsx,ts,tsx --fix --cache",
  (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      process.exit(1);
    } else {
      console.log(stdout);
      console.log("Lint fix applied successfully!");
    }
  }
);