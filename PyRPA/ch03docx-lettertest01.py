from docx import Document
import datetime as dt

템플릿파일명 = './input/letter-template.docx'
저장파일명 = './output/letter-yju.docx'
now = dt.datetime.now()

new_data ={  # dictionary
    '★★★ 요청문':'송금 확인 요청문',
    '[[회사명]]':'영진전문대학교',
    '[[수신인]]':'김영진',
    '[[제품명]]':'항공료',
    '[[발행일]]':now.strftime('%Y년%m월%d일')
}

doc = Document(템플릿파일명)

for p in doc.paragraphs:
    for k,v in new_data.items():
        if (p.text.find(k)>=0):
            p.text = p.text.replace(k,v)

doc.save(저장파일명)            