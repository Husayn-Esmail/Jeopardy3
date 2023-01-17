import csv

if __name__ == '__main__':
    filename = "ISA_Jeopardy_Questions.csv"
    categories_and_qs = {}
    with open(filename, 'r') as f:
        csvFile = csv.reader(f)
        for line in csvFile:
            print(line)
            category = line[0]
            qa_list = []
            first = True
            i = 1
            while i != len(line):
                print(line[i])
                qa_tuple = (line[i], line[i+1])
                print(qa_tuple)
                qa_list.append(qa_tuple)
                i += 2
            categories_and_qs[category] = qa_list

    for category in categories_and_qs:
        print("category: %s, qa pairs: " % category)
        print(categories_and_qs[category])
    



