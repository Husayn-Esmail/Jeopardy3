# Generate example csv file
import csv

def create_template_string():
    i = 1
    final = """"""
    while i != 6:
        final += f"Cat{i}" + create_question_answer() + "\n"
        i += 1
    return final

def create_question_answer():
    i = 100
    final = ""
    while i != 600:
        final += f",{i}q,{i}a"
        i += 100
    # print("final: ", final)
    return final

def generate_csv(fname):
    with open(fname, "w") as f:
        f.write(create_template_string())
    return 0


if __name__ == '__main__':
    filename = "example_format.csv"
    generate_csv(filename)