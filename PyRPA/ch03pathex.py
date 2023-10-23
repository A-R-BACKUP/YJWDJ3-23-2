import os
path1 = os.path.abspath('./input/name1.xlsx')

print(path1)

print(__file__)
basedir = os.path.dirname(__file__)
print(basedir)

path2 = os.path.join(basedir,'input','name1.xlsx')
print(path2)

path2 = os.path.abspath(path2)
print(path2)

