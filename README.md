cd /home/claude/html && cat > gen_all_texts.py << 'PYEOF'
from gen_text import make_text_png

texts = {
 "t_almothnna_name": ("اسم الخط: Al Mothnna Bold (الاسم التقني: ae_AlMothnna-Bold)", 26, "#112F4C"),
 "t_almothnna_desc": ("خط عربي مُزخرف بأسلوب هندسي مستدير، مُستخدم حصريًا في رسم الشعار نفسه (Logotype)، وغير مخصص لنصوص التشغيل الطويلة.", 26, "#41526C"),
 "t_almothnna_warn": ("تنبيه هام: النسخة المُستخرجة من ملف الشعار نسخة جزئية (Subset) تحتوي فقط على الحروف المستخدمة داخل الشعار بالفعل، لذلك لا يمكن استخدامها لكتابة كلمات جديدة.", 26, "#CD2A2B"),
 "t_almothnna_reco": ("للحصول على الخط الكامل، يُنصح بالتواصل مع مصمم الشعار الأصلي أو شراء ترخيص الخط.", 26, "#41526C"),
 "t_poppins_desc": ("أقرب تطابق متاح: Poppins، وزن ExtraBold أو Bold. خط هندسي عريض بنفس روح الأشكال المستخدمة في الشعار الأصلي، وقد تم استخدامه في جميع الأصول المصممة ضمن هذا الملف.", 26, "#41526C"),
 "t_body_desc": ("خط الشعار مخصص للعرض فقط وليس للفقرات، لذلك يُنصح باستخدام خط عربي حديث وواضح للفقرات الطويلة، مثل Cairo أو Tajawal أو Almarai. هذه الخطوط متوفرة مجانًا على Google Fonts وتضمن قابلية قراءة عالية في المنشورات والتقارير.", 26, "#41526C"),
 "t_usage1": ("يُستخدم Primary Navy للنصوص الأساسية والشعار على الخلفيات الفاتحة.", 24, "#2A3B4D"),
 "t_usage2": ("تدرّج الأزرق (الماء) وتدرّج البرتقالي/الأحمر (اللهب) مخصصان لأيقونة الشعار فقط، ولا يُنصح باستخدامهما كخلفيات نصية كبيرة.", 24, "#2A3B4D"),
 "t_usage3": ("Slate Gray يُستخدم للنصوص الثانوية ولكلمة THERM فقط.", 24, "#2A3B4D"),
 "t_usage4": ("يجب توفر تباين كافٍ دائمًا بين النص والخلفية لضمان الوضوح.", 24, "#2A3B4D"),
 "t_minsize": ("اترك دائمًا مساحة فارغة حول الشعار لا تقل عن ارتفاع حرف G في الأيقونة، ولا تضع أي عناصر نصية أو رسومية أخرى داخل هذه المساحة.", 24, "#41526C"),
}

for key,(txt,size,color) in texts.items():
    make_text_png(txt, f"textimgs/{key}.png", width=1300, pointsize=size, color=color)
    print(key, 'done')
PYEOF
python3 gen_all_texts.py
Output

t_almothnna_name done
t_almothnna_desc done
t_almothnna_warn done
t_almothnna_reco done
t_poppins_desc done
t_body_desc done
t_usage1 done
t_usage2 done
t_usage3 done
t_usage4 done
t_minsize done
