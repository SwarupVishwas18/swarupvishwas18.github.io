import json

obj = {
    'name' : 'Swarup Deepak Vishwas',
    'socials' : {
        'Telegram' : '@lucifer_morning_star_12',
        'Twitter' : '@sdvishwas2312',
        'Github' : '@SwarupVishwas18',
        'Gmail' : 'swarupvishwas000@gmail.com'
     },
     'description' : 'Made with Peace and Love 💝'
}

y = json.dumps(obj)

file = open('./api.json', 'w')

file.write(y)