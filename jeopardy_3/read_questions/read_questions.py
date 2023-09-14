import csv

def extract_data_from_csv(csv_filename):
    """
    accepts a filename (String) in csv format and iterates through all the entries
    extracts the category (key) and question/answer pairs that should be sorted
    by difficulty (value)

    returns a dicitonary where the key is a category and the value is an array of
    tuples (question, answer)
    """
    # init empty dictionary
    cats_and_qs = {}

    with open(csv_filename, "r", encoding="utf-8") as f:
        csvFile = csv.reader(f)
        for line in csvFile:
            category = line[0]
            qa_list = []
            # init iterator
            i = 1
            while i != len(line):
                qa_tuple = (line[i], line[i+1])
                qa_list.append(qa_tuple)
                # update 2 because the question and answer are stored side by side
                i += 2
            
            # category and questions list have been created
            cats_and_qs[category] = qa_list
    return cats_and_qs

if __name__ == '__main__':
    filename = "ISA_Jeopardy_Questions.csv"
    data = extract_data_from_csv(filename)
    print(data)
    # categories_and_qs = {}
    # with open(filename, 'r') as f:
    #     csvFile = csv.reader(f)
    #     for line in csvFile:
    #         print(line)
    #         category = line[0]
    #         qa_list = []
    #         first = True
    #         i = 1
    #         while i != len(line):
    #             print(line[i])
    #             qa_tuple = (line[i], line[i+1])
    #             print(qa_tuple)
    #             qa_list.append(qa_tuple)
    #             i += 2
    #         categories_and_qs[category] = qa_list

    # for category in categories_and_qs:
    #     print("category: %s, qa pairs: " % category)
    #     print(categories_and_qs[category])
    



