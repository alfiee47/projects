from selenium import webdriver
import pyperclip as pc
from selenium.webdriver.chrome.options import Options
import os
from request import request


import time
# chrome_options = Options()
# chrome_options.add_argument("--headless")
# chrome_options.add_argument("--window-size=1920x1080")
# chrome_options.add_argument("disable-gpu");

article = request().getarticle('Python_(programming_language)')
# article = ("this is the text of my life and you do not  the meaning of life so what is it ")

browser = webdriver.Chrome()
browser.get('https://www.rewritertools.com/article-rewriter')
userElem = browser.find_element_by_id('input-content')
userElem.send_keys(article)

# paraphrase = browser.find_element_by_class_name("MuiButtonBase-root.MuiButton-root.MuiButton-contained.QuillButton-sc-12j9igu-0.cnCtGi.quillArticleBtn.MuiButton-containedPrimary")
# paraphrase.click();

paraphrase = browser.find_element_by_id("next-input")
paraphrase.click();
time.sleep(50)
next = browser.find_element_by_id("next-preview")
next.click();
time.sleep(4)
copytext = browser.find_element_by_id("copybtn");
copytext.click();
txt = pc.paste();
browser.close();


print(txt)