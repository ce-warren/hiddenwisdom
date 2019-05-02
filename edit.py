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

out = []
count = 1
for word in t:
    if word == "":
        out.append('<div class="linebreak"></div>')
        out.append('<div class="linebreak"></div>')
    else:
        out.append('<div class="word off" id="' + str(count) + '">' + word + '</div>')
        count += 1

for i in out:
    print(i)