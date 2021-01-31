(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{511:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Простой скрипт для отправки почты с gmail:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" smtplib\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("multipart "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MIMEMultipart\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MIMEText\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# me == my email address")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# you == recipient's email address")]),s._v("\n    me "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"youremail@gmail.com"')]),s._v("\n    you "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"someemail@gmail.com"')]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Create message container - the correct MIME type is multipart/alternative.")]),s._v("\n    msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MIMEMultipart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'alternative'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Subject'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Link"')]),s._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'From'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" me\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'To'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" you\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Create the body of the message (a plain-text and an HTML version).")]),s._v("\n    text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hi!\\nHow are you?\\nHere is the link you wanted:\\nhttp://www.python.org"')]),s._v("\n    html "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\\\n    \n      \n      \n        Hi!\n           How are you?\n           Here is the link you wanted.\n        \n      \n    \n    """')]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Record the MIME types of both parts - text/plain and text/html.")]),s._v("\n    part1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MIMEText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'plain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    part2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MIMEText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Attach parts into message container.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# According to RFC 2046, the last part of a multipart message, in this case")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the HTML message, is best and preferred.")]),s._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("attach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("part1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("attach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("part2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Send the message via local SMTP server.")]),s._v("\n    mail "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" smtplib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SMTP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp.gmail.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("587")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ehlo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("starttls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yourmail@gmail.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("me"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" you"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("as_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br")])]),a("p",[s._v("P.S. Ограничение на отправку 99 писем на сколько мне помнится.")])])}),[],!1,null,null,null);t.default=e.exports}}]);