(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{520:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("p",[this._v("Небольшой скрипт для дампа всех БД в отдельные файлы с названием бд и текущей датой:")]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[this._v('#!/bin/bash\n\nUSER="root"\nPASSWORD="PASSWORD"\n\ndatabases=`mysql -u $USER -p$PASSWORD -e "SHOW DATABASES;" | tr -d "| " | grep -v Database`\n\nfor db in $databases; do\n    if [[ "$db" != "information_schema" ]] && [[ "$db" != "performance_schema" ]] && [[ "$db" != "mysql" ]] && [[ "$db" != _* ]] ; then\n        echo "Dumping database: $db"\n        mysqldump -u $USER -p$PASSWORD --databases $db > `date +%Y%m%d`.$db.sql\n    fi\ndone')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);