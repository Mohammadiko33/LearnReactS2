import React, { Component } from "react";
// import React, { Component , PureComponent } from "react";
import "./components/7.TodoList/App.css";
import Todo from "./components/7.TodoList/Todo";


// export default class App8 extends Component {
// export default class App8 extends PureComponent {
export default class App8 extends React.PureComponent {

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

    shouldComponentUpdate(props , state){
     if (this.state.iptValue !== props.title){
      return false
     }
     return true
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

// هر موقع توی شوت کامپونت اپدیت یک مقدار به اسم تورو رو برای ما ریترن بشه به رندر میره و ریرندر میشه اما اگر توی این شود کامپوننتما مقدار قالبس یا مقدار اندیفایند که بازم مقدار فالس ولیو ریترن بشع اون موقع همینجا کلا کنسل میشه و اصلا ریرندر هم نمیشه 
// ریرندر بعد از متدد شولد کامپونت انجام میشه

//10
// forceUpdate برای قسمتی هستش که کامپننت ما به طور دیفالت یک مقدار منتظر و بدون تغییر پراپ ها و تغییر استیت ها خود به خود تودو هامون اپدیت میشه  به همچین حالتی میگن
// Mounting => constructor => getDerivedStateFromProps => render => React Updates DOM and refs => componentDidMount
// مانتینگ یعنی بدنیا امدن و ساخته شدن یک کامپوننت => مرحله بعدی کانسراکتور هست که به معنای سازنده و اولین متدد در مانتینگ هست => بعدش گتدیرایوید استیت فروم پراپس است انی مرحله دیتا ها رو از پراپ و یا از استیت میگیرد => و در بخش رندر محتوا هایی که از پراپس و استیت گرفته رو در رندر داخل تگ ها و المنت ها قرارشون میده => این مرحله تضمیین میکند که تغییرات منطقی و ساختاری که هر کامچپوننت ایجاد شده است به طور صحیح در صفحات وب نمایش داده شوند => عملیات هایی بعد از نصب کامپوننت و زمانی که دام در دسترس است به کار میرود این متدد کامپوننت دید مانت
// Updating => New Props || SetState() => getDerivedStateFromProps => shouldComponentUpdate => render => getSnapshotBeforeUpdate => React Updates DOM and refs => componentDidUpdate
// اپدینتینگ یعنی بخش ی که میخاد تغییراتی روی و استیت و پراپ ها ایجاد بشه => که اپدیت یا از پراپ های جدیده یا ست استیت است  => انی متدد میاددیتا هارو از از پراپ یا استیت جدید میگیره و یا اینجوری بگم یک متدد استاتیک هست که به عنوان یک تابع در کلاس کامپوننت تعریف میشود این متدد دوتا ورودی میگیرد به اسم استیت قبلی و پراپ جدید این متدد زمانی فراخانی میشود که پراپ جدیدی به کامپوننت تعریف ارسال میشود هدف اصلی ان برورسانی وعضیت کامپوننت بر اساس تغییر در بروزرسانی پراپ است => این مرحله از ما اجازه بروزرسنای میخاهد و اگر جواب ما ریرتن ماتورو باشد برای ما بروزرسانی را انجام میدهد ولی گار اجازه یا ریرتن فالس باشد  اونموصع برای ما بروزرسانی انجام نخواهد شد هدف استفاده از این متدد افزایش کارایی و بهبود عملکرد برای جلوگیری از بروزرسانی های غیر ضروری => مرحله بعد رندرینگ هست => قبل از اینکه کامپوننت بروزرسانی شود و تغییرات به دام اعمال شود این متدد فراخانی میشود بازگشت داده میتواند هر نوع داده ای رابازگردانند که به عنوان پرامتر به متدد کامپونتت دید اپدیت اسرال خواهد کرد مثال فرض کنید که میخاید موقعیت اسکرول لیستی را از قبل بروزرسانی ذخیره کنید تا بعد از بروزرسانی دوباره به همان موقعیت باز گردد => این مرحله تضمیین میکند که تغییرات منطقی و ساختاری که هر کامچپوننت ایجاد شده است به طور صحیح در صفحات وب نمایش داده شوند => برای انجام هملیات پس از بروزرسانی و دسترسی به داده های جدید. قدیم کامپوننت استفاده میشود این مرحله به توسعه دهندگان اجازه میدهد که تغییرات را به درستی مدیریت کنند و عملیات های پس از بروزرسانی را انجام دهند
// Updating => ForceUpdate  => getDerivedStateFromProps => render => getSnapshotBeforeUpdate => React Updates DOM and refs => componentDidUpdate
// اپدینتینگ یعنی بخش ی که میخاد تغییراتی روی و استیت و پراپ ها ایجاد بشه => در این مرحله اپدیت اجباری انجام میشه => انی متدد میاددیتا هارو از از پراپ یا استیت جدید میگیره و یا اینجوری بگم یک متدد استاتیک هست که به عنوان یک تابع در کلاس کامپوننت تعریف میشود این متدد دوتا ورودی میگیرد به اسم استیت قبلی و پراپ جدید این متدد زمانی فراخانی میشود که پراپ جدیدی به کامپوننت تعریف ارسال میشود هدف اصلی ان برورسانی وعضیت کامپوننت بر اساس تغییر در بروزرسانی پراپ است  => مرحله بعد رندرینگ هست => قبل از اینکه کامپوننت بروزرسانی شود و تغییرات به دام اعمال شود این متدد فراخانی میشود بازگشت داده میتواند هر نوع داده ای رابازگردانند که به عنوان پرامتر به متدد کامپونتت دید اپدیت اسرال خواهد کرد مثال فرض کنید که میخاید موقعیت اسکرول لیستی را از قبل بروزرسانی ذخیره کنید تا بعد از بروزرسانی دوباره به همان موقعیت باز گردد => این مرحله تضمیین میکند که تغییرات منطقی و ساختاری که هر کامچپوننت ایجاد شده است به طور صحیح در صفحات وب نمایش داده شوند => برای انجام هملیات پس از بروزرسانی و دسترسی به داده های جدید. قدیم کامپوننت استفاده میشود این مرحله به توسعه دهندگان اجازه میدهد که تغییرات را به درستی مدیریت کنند و عملیات های پس از بروزرسانی را انجام دهند
// UnMounting  => componentWillUnmount
// ان معتینگ یعنی مرگ یک کامپوننت => این متدد فراخانی میشود قبل از اینکه کامپوننت از دام حذف شود