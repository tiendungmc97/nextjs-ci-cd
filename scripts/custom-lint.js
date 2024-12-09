const { exec } = require("child_process");

exec(
  "eslint src --ext ts,tsx,js,jsx --report-unused-disable-directives --max-warnings 0 --cache",
  (error, stdout, stderr) => {
    if (error) {
      const modifiedMessage = stdout.replace("--fix", "npm run lint:fix");
      console.error(modifiedMessage);
      process.exit(1);
    } else {
      console.log(stdout);
      console.log("Lint check passed successfully!");
    }
  },
);
