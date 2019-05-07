file = open('text.txt', 'r')
text = file.read()
file.close()

text = text.split('\n')

t = []
for para in text:
    if para == "":
        t.append("")
    else:
        t.extend(para.split())

# out = []
# count = 1
# for word in t:
#     if word == "":
#         out.append('<div class="linebreak"></div>')
#     else:
#         this_count = count
#         count += 1
#         s = ''
#         for letter in word:
#             if letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'":
#                 s += letter
#             else:
#                 s += '<span class="word off" id="' + str(count) + '">' + letter + '</span>'
#                 count += 1
#         out.append('<span class="word off" id="' + str(this_count) + '">' + s + '</span>')

out = []
count = 1
for word in t:
    if word == "":
        out.append('<div class="linebreak"></div>')
    else:
        extras = []
        this_count = count
        count += 1
        s = ''
        for letter in word:
            if letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'":
                s += letter
            else:
                extras.append('<span class="word off" id="' + str(count) + '">' + letter + '</span>')
                count += 1
        out.append('<span class="word off" id="' + str(this_count) + '">' + s + '</span>')
        out.extend(extras)

for i in out:
    print(i)