import React, { useState, useEffect } from 'react';
import './components/31.TodoNormal/App.css';
import Todo from './components/31.TodoNormal/TodoIsMounting';
import Modal from './components/31.TodoNormal/Modal';

export default function App31() {
    const modals = [
        { id: 1, title: "todos is updated", color: "var(--bs-teal)", location: '1vw' },
        { id: 2, title: "todo is deleting", color: "var(--bs-red)", location: '1vw' }
    ];

    const [iptValue, setIptValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [modalContent, setModalContent] = useState(null); // State برای محتوای Modal

    const changeIptValue = e => setIptValue(e.target.value);

    const makeATodo = e => {
        e.preventDefault();

        if (iptValue.length > 2) {
            let newTodo = {
                id: todoList.length + 1,
                title: iptValue
            };
            setTodoList(prevState => [...prevState, newTodo]);
            setModalContent(modals[0]); // نشان دادن Modal برای اضافه کردن
        }

        setIptValue('');
    };

    const removeTodoHandler = id => {
        setTodoList(todoList.filter(todo => todo.id !== id));
        setModalContent(modals[1]); // نشان دادن Modal برای حذف
    };

    useEffect(() => {
        if (modalContent) {
            const timer = setTimeout(() => {
                setModalContent(null); // بعد از ۳ ثانیه Modal را ناپدید کن
            }, 3000);
            return () => clearTimeout(timer); // پاک کردن تایمر در صورت تغییر
        }
    }, [modalContent]); // عupdating



    return (
        <section className="todos">
            <h1 className='title' style={{ color: '#fff' }}>Add New Todo...</h1>
            <form onSubmit={makeATodo}>
                <input type="text" placeholder='Please Enter A Todo' className='iptValue' onChange={changeIptValue} value={iptValue} />
                <input type="submit" value="Submit" className='submitBtn' />
            </form>
            {
                todoList.length > 0 && todoList.map(todo => (
                    <Todo key={todo.id} {...todo} onRemove={removeTodoHandler} />
                ))
            }
            {modalContent && <Modal {...modalContent} />} {/* نمایش Modal در صورت وجود */}
        </section>
    );
}


// هر موقع یوز افکتی ما بنویسیم که بگیم یوزافکت و براش ی دونه یوز افکت ارسال کنیم و توی ورودیش که همیشه هم فانکشن هستش زمانی که بیام یک کاری انحام بدیم به محض مانتینگ و اپدیتینگ اون کامپوننت ما همین کال بک فانکشن برای ما یک بار انجام میشه  
// useEffect(() => { console.log('componentDidMount , componentDidUpdate') })
// mount اما اگر نخایم موقع اپدیتینگ اون کار انجام بشه میخام فقط و فقط موقع مانتیگ انجام بشه من اگه بخام کار های که توی یوزافکت نوشتم فقط فقط موقع مانتینگ انجام بشه میام به عنوان ورودی دوم به یوزافکتم یک ارایه خالی ارسال میکنم این لاگ در اپدیت نشان نخواهد داده شد 
// useEffect(() => { console.log('componentDidMount') } , [])
// اما اگر من بخام فقط موقع اپدیتینگ برای من لاگ گرفته بشه میام توی همین ارایه خالی براش اون استیتی رو بهش میدم که میخام به اعضای تغییر اون استیت این فانکشن من فراخانی بشه پس این یوزافکتم فقط و فقط موقع اپدیت اون استیتی که بهش دادم اجرا میشه 
// useEffect(() => { console.log('componentDidUpdate') } , [todoList])
// ما میتونیم به کمک ریترن کردن یک فانکشن داخل یوز افکت ان معتینگ هر کدوم از کامپوننت هارو طراحی بکنیم  
// useEffect(() => {
//     return () => {
//         console.log('componentUnMount')
//     }
// })