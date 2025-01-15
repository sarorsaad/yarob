function App() {
    return (
        <div>
            <section id="intro" className="section">
                <h2>مقدمة</h2>
                <p>
                    في هذا الدرس، سنتعرف على أول Hook في React وهو useState. 
                    هذا الـ Hook يعتبر من أهم الأدوات التي نستخدمها في React للتحكم في حالة المكونات.
                </p>
            </section>

            <section id="what-is-hook" className="section">
                <h2>ما هو الـ Hook؟</h2>
                <p>
                    الـ Hooks في React هي دوال خاصة تتيح لك استخدام ميزات React في المكونات الوظيفية.
                    على سبيل المثال، useState هو Hook يتيح لك إضافة حالة (state) إلى المكونات الوظيفية.
                </p>
            </section>

            <section id="usestate-intro" className="section">
                <h2>مقدمة عن useState</h2>
                <p>
                    useState هو Hook يمكنك من إضافة متغير حالة (state) إلى مكونك.
                    يقوم هذا الـ Hook بإرجاع مصفوفة تحتوي على عنصرين:
                </p>
                <ul>
                    <li>قيمة الحالة الحالية</li>
                    <li>دالة لتحديث هذه القيمة</li>
                </ul>
            </section>

            <section id="usestate-syntax" className="section">
                <h2>طريقة استخدام useState</h2>
                <div className="example-box">
                    <code>
                        const [count, setCount] = useState(0);
                    </code>
                </div>
                <p>
                    حيث:
                </p>
                <ul>
                    <li>count: متغير يحمل قيمة الحالة الحالية</li>
                    <li>setCount: دالة لتحديث قيمة count</li>
                    <li>0: القيمة الأولية للحالة</li>
                </ul>
            </section>

            <section id="example" className="section">
                <h2>مثال تطبيقي</h2>
                <CounterExample />
            </section>

            <section id="advanced" className="section">
                <h2>استخدامات متقدمة</h2>
                <NameToggleExample />
            </section>
        </div>
    );
}

function CounterExample() {
    const [count, setCount] = React.useState(0);

    return (
        <div className="example-box">
            <p>العداد: {count}</p>
            <button 
                className="button"
                onClick={() => setCount(count + 1)}
            >
                زيادة العداد
            </button>
        </div>
    );
}

function NameToggleExample() {
    const [name, setName] = React.useState("أحمد");

    return (
        <div className="example-box">
            <p>الاسم الحالي: {name}</p>
            <button 
                className="button"
                onClick={() => setName(name === "أحمد" ? "يعرب" : "أحمد")}
            >
                تبديل الاسم
            </button>
            <p>
                في هذا المثال، نستخدم useState للتبديل بين اسمين.
                عند الضغط على الزر، يتم تحديث الحالة وإعادة عرض المكون تلقائياً.
            </p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
