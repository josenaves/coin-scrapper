# coin-scrapper

This is a very simple Node script that I made for a friend of mine grab all bitcoin quotes from a period of time and outputs the data in CSV format.

All that comes from [MercadoBitcoin](https://www.mercadobitcoin.com.br/). I'm using [their REST API](https://www.mercadobitcoin.com.br/api-doc/).

## Installation

To use this, you must have Node and NPM installed.
I'm using Node v8.6.0 and npm 4.6.1 at this time.

Go to your terminal and inside the folder where the project lives, type:

```
npm i
npm link
```

## Usage

```
coin-scrapper <initial_date> <final_date>
```

Note that all dates must be in the following format ```YYYY-MM-DD```

Example:

```
josenaves@skynet:~/Projects/coin-scrapper $ coin-scrapper 2017-01-01 2017-01-10
"lowest","volume","amount","avg_price","opening","date","closing","highest","quantity"
3424.24001,264841.20711984,319,3524.76662875,3435.0064,"2017-01-01",3551.00031,3615,75.13723177
3551.00031,624214.82164196,986,3666.80847477,3551.00031,"2017-01-02",3619,3797.99999,170.23382212
3564.54618,660226.59092858,903,3637.3514541,3619,"2017-01-03",3679.98882,3698,181.51300452
3586.29724,940716.6949968,1392,3854.31046395,3679.98879,"2017-01-04",4000,4094.99897,244.06873909
3600,1273071.39391004,1823,3797.35454428,4047.80164,"2017-01-05",3825.99978,4047.80164,335.25218124
3200,1014136.20604806,1614,3499.96714788,3826.00012,"2017-01-06",3469.88937,3899.99875,289.75592147
3260.33301,453111.4693488,683,3375.37900586,3425,"2017-01-07",3333,3549,134.24017527
3332.3,304710.6179229,466,3422.72485764,3333.75566,"2017-01-08",3353,3494,89.02574136
3330,515805.16521687,946,3395.93564399,3384.99995,"2017-01-09",3386.00079,3450,151.88896943
3250,552624.08746928,1051,3340.71002984,3385,"2017-01-10",3260,3437.2,165.42114776
```

You can always redirect the data to a file using >

```
josenaves@skynet:~/Projects/coin-scrapper $ coin-scrapper 2017-01-01 2017-01-10 > btc-2017-01.csv
```

## TO DO

- [ ] Validations
- [ ] Error handling
- [ ] Get different coins (LiteCoin, BCash, etc)