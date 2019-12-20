window.onload = function()
{
    SIprefixes();
}


function SIprefixes()
{
    const ten = math.bignumber(10);

    const base10 = [{"prefix": "yotta", "power": 24},
                    {"prefix": "zetta", "power": 21},
                    {"prefix": "exa", "power": 18},
                    {"prefix": "peta", "power": 15},
                    {"prefix": "tera", "power": 12},
                    {"prefix": "giga", "power": 9},
                    {"prefix": "mega", "power": 6},
                    {"prefix": "kilo", "power": 3},
                    {"prefix": "hecto", "power": 2},
                    {"prefix": "deca", "power": 1},
                    {"prefix": "(none)", "power": 0},
                    {"prefix": "deci", "power": -1},
                    {"prefix": "centi", "power": -2},
                    {"prefix": "milli", "power": -3},
                    {"prefix": "micro", "power": -6},
                    {"prefix": "nano", "power": -9},
                    {"prefix": "pico", "power": -12},
                    {"prefix": "femto", "power": -15},
                    {"prefix": "atto", "power": -18},
                    {"prefix": "zepto", "power": -21},
                    {"prefix": "yocto", "power": -24}];

    for(let p of base10)
    {
        writeToConsole(p.prefix.padEnd(7, " "));
        writeToConsole("10^" + p.power.toString().padEnd(4, " ") + "=");
        writeToConsole(math.format(math.pow(ten, p.power),  {notation: 'fixed'}).padStart(27, " ") + "<br />");
    }
}
