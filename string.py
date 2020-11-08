string = "[Programming [langu[age]]] is the most popular programming language [today]"
substring = "Javascript"


def findClose(string):
    count=1
    for i in range(len(string)):
        if string[i] =='[':
            count +=1
        elif string[i] == ']':
            count -=1
        if string[i]== ']' and count == 1:
            return i

def swap(string, substring):
    start = string.find('[')
    finish = findClose(string)+1
    print(start, finish)
    return substring+string[finish:]

print(swap(string, substring))