import rl from "node:readline";
import config from "../JSON/config.json";
import { stdin, stdout } from "node:process";
import { writeFileSync } from "node:fs";
import { ColorResolvable, Colors, resolveColor } from "discord.js";
import { Config } from "../Interfaces";
import { join } from "node:path";
import chalk from "chalk";

const readLine = rl.createInterface(stdin, stdout)

function compareArrays(array1: any[], array2: any[]) {
    let equal = true;
    array1.forEach(item1 => {
        if (!array2.includes(item1)) return equal = false;
    });
    return equal;
}

// Verify Colors

function isRGBArray(array: any[]) {
    let isRGB = true;
    array.forEach((item) => {
        if (typeof item !== "number") return isRGB = false;
    });
    return isRGB;
}

function verifyColors(configFile: Config) {
    let colorsVerified = false;
    for (var i = 0; i < configFile.SERVER_COLOR.length; i++) {
        if (typeof configFile.SERVER_COLOR[i] === "string") {
            if (configFile.SERVER_COLOR[i].toString().startsWith("#")
                || Object.keys(Colors).includes(configFile.SERVER_COLOR[i].toString())) {colorsVerified = true; continue;};
            console.log(chalk.red("Invalid color input: ") + chalk.redBright(`"${config.SERVER_COLOR[i]}"`));
            console.log(chalk.red("Removing it from the config."));
            configFile.SERVER_COLOR.splice(i, 1);
            const jsonConfig = JSON.stringify(configFile, null, 4);
            writeFileSync(join(__dirname, "..", "JSON", "config.json"), jsonConfig);
        } else if (Array.isArray(configFile.SERVER_COLOR[i])) {
            const array: any[] = configFile.SERVER_COLOR[i]
            array.forEach(value => {
                if (typeof value === "number") {colorsVerified = true; return;}
                console.log(`RGB Array "${configFile.SERVER_COLOR[i]}", contains an invalid value. Removing it.`);
                configFile.SERVER_COLOR.splice(i, 1);
                const jsonConfig = JSON.stringify(configFile, null, 4);
                writeFileSync(join(__dirname, "..", "JSON", "config.json"), jsonConfig);
            });
        }
    }
    if (colorsVerified) {
        console.log(chalk.green("Successfully Verified Colors."));
    }
}

function _verifyToken(config: Config) {
    if (config.TOKEN.startsWith("Replace")) {
        console.log(chalk.red("You haven't changed your token,"))
        readLine.question(chalk.cyan("Please enter your bot token or \"exit\" to exit: "), (input) => {
            readLine.close();
            if (input.toLowerCase() === "exit") process.exit(0);
            console.log(chalk.magenta("Saving bot token to config."));
            config.TOKEN = input;
            const jsonConfig = JSON.stringify(config, null, 4);
            writeFileSync(join(__dirname, "..", "JSON", "config.json"), jsonConfig);
            console.log(chalk.magenta("Saved bot token to config."));
        })
    }
}

export function verifyToken(config: Config): Promise<void> {
    return new Promise((res, rej) => {
        console.log(chalk.red("The provided token is invalid,"))
        readLine.question(chalk.cyan("Please enter your bot token or \"exit\" to exit: "), (input) => {
            if (input.toLowerCase() === "exit") process.exit(0);
            console.log(chalk.magenta("Saving bot token to config."));
            config.TOKEN = input;
            const jsonConfig = JSON.stringify(config, null, 4);
            writeFileSync(join(__dirname, "..", "JSON", "config.json"), jsonConfig);
            console.log(chalk.magenta("Saved bot token to config."));
            res();
        })
    })
}

console.clear();
console.log(chalk.blue("Running initial startup..."));
console.log();
verifyColors(config as Config);
console.log();
_verifyToken(config as Config);