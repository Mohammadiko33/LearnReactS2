import React, { Component } from "react";
import "./components/7.TodoList/App.css";
import Todo from "./components/7.TodoList/Todo";


export default class App7 extends Component {

    constructor(props) {
      super(props);

      console.log('i am in app7.js => constructor')
  
      this.state = {
        iptValue: "",
        todos: [],
        status: "all",
      };
  
      this.MakeTodo = this.MakeTodo.bind(this);
      this.complateATodo = this.complateATodo.bind(this);
      this.removeATodo = this.removeATodo.bind(this);
    }

    
    putIptValueHandler(e) {
      this.setState({
        iptValue: e.target.value,
      });
    }
  
    statusFiltered(e) {
      this.setState({
        status: e.target.value,
      });
    }
  
    complateATodo(todoID, e) {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) =>
          todo.id === todoID
            ? { ...todo, isComplate: !todo.isComplate }
            : todo
        ),
      }));
    }
  
    removeATodo(todoID) {
      let filteredTodos = this.state.todos.filter(
        (todo) => todo.id !== todoID
      );
      this.setState({
        todos: filteredTodos,
      });
    }
  
    MakeTodo(e) {
      e.preventDefault();
  
      let { iptValue, todos } = this.state;
      
      if (iptValue && iptValue.length > 2) {
        let newObj = {
          id: todos.length + 1,
          isComplate: false,
          title: iptValue,
        };
        
        this.setState((prevState) => ({
          todos: [...prevState.todos, newObj],
          iptValue: "",
        }));
      }
    }

    componentDidMount(){
      console.log('i am in app7.js => componentDidMount')
    }
    
    static getDerivedStateFromProps(props) {
      console.log('i am in app7.js => getDerivedStateFromProps')
    }
    
    render() {
      
      console.log('i am in app7.js => render')

      let filteredTodos = this.state.todos;
      if (this.state.status === "completed") {
        filteredTodos = filteredTodos.filter(
          (todo) => todo.isComplate
        );
      } else if (this.state.status === "uncompleted") {
        filteredTodos = filteredTodos.filter(
          (todo) => !todo.isComplate
        );
      }
  
      return (
        <div className="todoList">
          <h1 className="todoList_headerTitle">Leach mob Todo List</h1>
  
          <div className="todo_Enter_filter__continer">
            <form
              className="todoEnter_continer"
              onSubmit={this.MakeTodo}
            >
              <input
                type="text"
                className="todo_Enter"
                placeholder="Enter a Todo"
                maxLength={50}
                onChange={(e) =>
                  this.putIptValueHandler(e)
                }
                value={this.state.iptValue}
                autoFocus
              />
              <button
                type="submit"
                className="addTodoBTN"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#7D7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#7D7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
            <select
              className="todo_filter__continer"
              onChange={(e) =>
                this.statusFiltered(e)
              }
            >
              <option value="all">all</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
  
          <div className="todos_continer">
            {filteredTodos.map((todo) => (
              <Todo
                {...todo}
                key={todo.id}
                onComplate={this.complateATodo}
                onRemove={this.removeATodo}
              />
            ))}
          </div>
        </div>
      );
    }
  }

// توضیحات کانسراکتر میشه متدد اول از قسمت مانتینگ پس زمانی که یک کامپونت بخاد احرا بشه به محض اینکه بخاد ساخته بشه و روی دام بیاد اول اول یک چیزیی به اسم کانسراکتور خود به خود دیفالت برای ما انجام میشه و ما اگه بخایم در این مرحله از زندکی کامپونتمون انجام بشه و اتفاق بیوفته میایم توی این متدد انجامش میدیم و مثل همین ساخت استیت هامون 
// از یک متددی به متددی به اسم گت دراوید استیت فرام پراپت استفاده میکنیم که ما بخایم از کانپوننتمون که میخاد روی ریل دام استفاده بشه و به کاربر نشون داده بشه من بخام ازش یعنی از پراپ هاش دیتا بگیرم و ست بکنم داخل استیت های اون کامپوننت چونکه پراپ ها رید اونلی هستن اما استیت ها رید اونلی نیستند 
// طبق نمودار سازنده که داخل پوشه فصل سوم ویدیو های ریاکت هست اول کانسراکتور بعد گیت دیرایو استیت فرام پراپس
// دقت داشته باشید تا زمانی که کامل زندر نشده و تا زمانی که همه چیز داخل جی اس سیکس ما همشون دقت داشته باشید همشون تا زمانی که رندر نشن به هیچ عنوان اپ دات جی اس یا کامپونت مورد نظر ما و فعلی ما دید مانت نخواهد شد پس اول توی این قسمت میاد توی اپ دات جی اس ما و اول سازندش اجرا میشه و میاد گیت درایو هاش بازم اجرا میشن و سپس میاد توی رندر و چونکه توی زندر و چونکه توی زندر از همچین کامپونت تودو لیست استفاده کردیم قبل از اینکه دید مانت انجام بشه چونکه هنوز رندرش تکمیل نشده میاد توی تودو لیست دات جی اس و سپس کامپوننت دید مانت اجرا میشه و بعد از اینکه این قسمت کامل رندر میشه و این تودو لیسته کامل تکمیل شد اونوقت هست که دید مانت انجام میشه
// کاربرد کامپونتن دید مانت : خیلی کاربردیه مثلا صبر میکند که کامل جی اس سیکس اجرا بشه بعد یک همچین اتفاقی که داخل متددش نوشتیم رخ بده 
// مانتینگ فقظ یک بار اتفاق می افته ن بیشتر یعنی هر کامپوننتمون دید مانتش فقظ یک بار انجام میشه ن بیشتر 
// از کامپوننت دید مانت دقیقا کی استفاده میشه از این زمانی استفاده میشه که ما بخایم موقعی که کامپونتتمون بخاد برای ما روی دام رندر بشه و من بخام موقعه ای که رندر میشه   و کامل رندرش تکمیل شد بیام از ایپی ایم و از سمت سرورسم و بکند پروژی خدم دیتا ها و اطلاعاتی رو بگیرم و توی دام نشون بدم در کل برای همچین چیزایی استفاده میشه که در عکس مربوظه قسمت پایین سمت چپ توی بخش کامیت فاز گفته سعی کنید توی این قسمت های سبز و پایانی مانتینگ و اپدیتینگو ان موعتینگ هر کار مهمی که میخاین ارتباط با سمت سرور بخش کار با ایپی ای ها و کار با ای چکس و پرامیس گفته همشو توی این قسمت انجام بدین کامپونت دید مانت و ک. اپدیت و ک.ویل ان معنت
