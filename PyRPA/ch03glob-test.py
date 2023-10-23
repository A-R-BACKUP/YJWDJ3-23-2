import glob 
files = glob.glob('*.py') # 와일드카드 기호: * - 모든 문자열
                          # 와일드카드 기호: ? - 한개의 문자열 a?bc.py a1bc.py adbc.py
print(files)                          

