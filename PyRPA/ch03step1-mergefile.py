import openpyxl as xl
import glob

out_file = './output/merged_file.xlsx'
input_dir = './input/salesbooks'

def merge_files():
   # 실행의 준비
   book = xl.Workbook()
   main_sheet = book.active

   # 파일들 읽기 & 취합: 함수 처리
   enumfiles(main_sheet)


   # 저장하기
   book.save(out_file)

def enumfiles(main_sheet):
   files = glob.glob(input_dir+'/*.xlsx')
   for fileName in files:
      read_book(main_sheet, fileName)

def read_book(out_sheet,fileName):
   print("read",fileName)

   book = xl.load_workbook(fileName,data_only=True)
   sheet = book.active
   rows = sheet["a4":"f999"]
   for row in rows:
      values = [cell.value for cell in row]
      if values[0] is None: break
      print(values)

      out_sheet.append(values)
    
if __name__ == '__main__':
   merge_files()  # main 함수형태로 사용 가능, 모듈화 가능