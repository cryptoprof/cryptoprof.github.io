(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{512:function(t,e,n){"use strict";n.r(e);var a=n(6),i=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("p",[this._v("Простой скрипт для отправки почты с gmail:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[this._v("import smtplib\n\nfrom email.mime.multipart import MIMEMultipart\nfrom email.mime.text import MIMEText\n\n# me == my email address\n# you == recipient's email address\nme =\"youremail@gmail.com\"\nyou =\"someemail@gmail.com\"\n\n# Create message container - the correct MIME type is multipart/alternative.\nmsg = MIMEMultipart('alternative')\nmsg['Subject'] = \"Link\"\nmsg['From'] = me\nmsg['To'] = you\n\n# Create the body of the message (a plain-text and an HTML version).\ntext = \"Hi!\\nHow are you?\\nHere is the link you wanted:\\nhttp://www.python.org\"\nhtml = \"\"\"\\\n\n  \n  \n    Hi!\n       How are you?\n       Here is the link you wanted.\n    \n  \n\n\"\"\"\n\n# Record the MIME types of both parts - text/plain and text/html.\npart1 = MIMEText(text, 'plain')\npart2 = MIMEText(html, 'html')\n\n# Attach parts into message container.\n# According to RFC 2046, the last part of a multipart message, in this case\n# the HTML message, is best and preferred.\nmsg.attach(part1)\nmsg.attach(part2)\n# Send the message via local SMTP server.\nmail = smtplib.SMTP('smtp.gmail.com', 587)\n\nmail.ehlo()\n\nmail.starttls()\n\nmail.login('yourmail@gmail.com','PASSWORD')\n\nmail.sendmail(me, you, msg.as_string())\nmail.quit()\n")])])]),e("p",[this._v("P.S. Ограничение на отправку 99 писем на сколько мне помнится.")])])}),[],!1,null,null,null);e.default=i.exports}}]);