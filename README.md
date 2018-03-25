# Spark-documentation

##### Server software to manage documentation for the [Spark bot framework](https://github.com/TobiasFeld22/Spark).
---

[![Discord](https://discordapp.com/api/guilds/248505281741455360/embed.png)](https://discord.gg/TezD2Zg)


This software is only used for internal development. We can't promise support / documentation with this product.

###### Things you are allowed to do:

- Clone the software to experiment how we use our software.
- Make improvements & share them here.
- Host your own version for private use.

###### Things you are not allowed to do:
- Claim your hosted version is official.
- Editing and hosting without up to date information and / or invalid information.
- Host for public use and tell other users to use your host.
- Forcing other users to use your version of this software instead of the official host (https://discordspark.tk/).
- Providing documentation.
- Trying to find loopholes, bugs, errors, etc. in the software without reporting them [here](https://github.com/sparkbots/Spark-documenation/issues).

##### :warning: By cloning and / or using this software you agree to include this file and the license file inside your code.

---

#### Building the docs

Make sure you have ruby 2.x + installed on your computer,
then run this command to install jekyll:<br />
`gem install jekyll`

To start and checkout the site locally, first duplicate `_config.yml`, change it's name to `_config.local.yml` and change the url inside to http://localhost:4000

Then to start and view the docs locally you type this command:

```
jekyll serve --incremental --config _config.local.yml
```
Navigate to http://localhost:400 to see the website working.
