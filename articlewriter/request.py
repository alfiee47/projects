import requests
import sys
from bs4 import BeautifulSoup
from googlesearch import search

class request:
 
    def __init__(self):
        pass
        # res = requests.get('https://en.wikipedia.org/wiki/' + ' '.join(sys.argv[1:]))
    def getarticle(self,article):
        query = article;
        for j in search(query,tld='com',lang='en',num=1,stop=1,pause=2.0):
            nam = j
            
        print(nam)
          

        
        res = requests.get(j)
        
        soup = BeautifulSoup(res.content, 'html.parser')
        title = soup.find(id="firstHeading")
        arrayoftext = []
        for i in soup.select('p'):
            arrayoftext.append(i.getText())
            print(i.getText())
        return arrayoftext


art = request().getarticle('Python wikipedia')