import c from "./images/c.jpg"
import java from "./images/java.jpg"
import cplus from "./images/c++.jpg"
import cn from "./images/computer.jpg"
import ds from "./images/data.jpg"
import cloud from "./images/cloud.jpg"
import uml from "./images/uml.jpg"
import csh from "./images/csh.jpg"
import cg from "./images/cg.jpg"
import compiler from "./images/compiler.jpg"
const books=[
    {
        bookName:"Java",
        bookAuthor:"Herbert Schildt",
        bookImage:java,
        readingProcess:80,
        bookGener:"Computer",
        Desc:"If you only buy one Java book, then this is it. Affectionately referred to by readers as Java Programming bible. It is the BEST SELLING JAVA book of all time. Head First Java provides access to information every Java Programmer must know.",
        lastOpened:"Yesterday"
    },
    {
        bookName:"C",
        bookAuthor:"E Balagurusamy",
        bookImage:c,
        readingProcess:100,
        bookGener:"Computer",
        Desc:"The hallmark of this edition is its new avatar in color, to enhance visual appeal and makelearning a pleasure!V Labs allows students to learn and test programming skills in C. Students can taketests which are auto-evaluated and can get instant feedback upon completion.V Labscontains over 100 test problems that the students can try out to test their skills in variousC concepts such as 'data types', 'operators', 'branching', 'looping', 'functions', 'classes'etc.",
        lastOpened:"3 Month Ago"
    },
    {
        bookName:"C++",
        bookAuthor:"E Balagurusamy",
        bookImage:cplus,
        readingProcess:0,
        bookGener:"Computer",
        Desc:"Object-oriented programming with C++, 8th edition is here with some valuable updates. The new edition helps students to assess their learning by answering questions based on learning outcomes. Objective-type questions and dry-run questions are introduced to make students exam ready. A new appendix on interview questions is for those seeking to join the industry. The book is designed for students studying at the undergraduate level.",
        lastOpened:"6 Month Age"
    },
    {
        bookName:"Computer Network",
        bookAuthor:"Bhavneet Sidhu",
        bookImage:cn,
        readingProcess:20,
        bookGener:"Computer",
        Desc:"Computer networks have become essential part of modern computing. As a designer, developer, programmer or user it is absolutely necessary to have a good understating of The concepts and techniques involved in these modern networking technologies, This book treats The NEET work as a system composed of inter related building blocks, giving students and professionals ",
        lastOpened:"12 Minutes Ago"
    },
    {
        bookName:"Data Structure",
        bookAuthor:"Seymour Lipschutz",
        bookImage:ds,
        readingProcess:100,
        bookGener:"Computer",
        Desc:"The book gives a clear and concise presentation of wider range of data structures topics supported with variety of pedagogical features. C programs are used to depict the concepts and algorithm implementation makes it easier for the readers to comprehend. MCQs included in the text will help practicing the earlier learnt concept. Thus, this book will be an excellent self-teach and test preparation material for beginners.",
        lastOpened:"1 Minute Ago"
    },
    {
        bookName:"Cloud Computing",
        bookAuthor:"Rajkumar Buyya",
        bookImage:cloud,
        readingProcess:90,
        bookGener:"Computer",
        Desc:"The primary purpose of this book is to capture the state-of-the-art in Cloud Computing technologies and applications. The book will also aim to identify potential research directions and technologies that will facilitate creation a global market-place of cloud computing services supporting scientific, industrial, business and consumer applications.",
        lastOpened:"Yesterday"
    },
    {
        bookName:"Programming in c#",
        bookAuthor:"Jesse Liberty",
        bookImage:csh,
        readingProcess:75,
        bookGener:"Computer",
        Desc:"C# was designed from the ground up for development on Microsoft's .NET framework. As such, it's a high-performance language that's simple, safe, object-oriented, and Internet-centric. Programming C#, 2nd Edition teaches this new language in a way that experienced programmers will appreciate--by grounding its applications firmly in the context of Microsoft's .",
        lastOpened:"2 Month Ago"
    },
    {
        bookName:"UML",
        bookAuthor:"Grady Booch",
        bookImage:uml,
        readingProcess:10,
        bookGener:"Computer",
        Desc:"For nearly ten years, the Unified Modeling Language (UML) has been the industry standard for visualizing, specifying, constructing, and documenting the artifacts of a software-intensive system. As the de facto standard modeling language, the UML facilitates communication and reduces confusion among project stakeholders. The recent standardization of UML 2.0 has further extended the language's scope and viability",
        lastOpened:"10 Minute Ago"
    },
    {
        bookName:"Compiler",
        bookAuthor:"Ravi Sethi",
        bookImage:compiler,
        readingProcess:0,
        bookGener:"Computer",
        Desc:"The research and techniques that have been developed have led to this updated coverage of compilers. The book covers topics such as fine state machines, context-free grammars and syntax-directed translations. It also contains an introduction to the compiler design.",
        lastOpened:"Yesterday"
    },
    {
        bookName:"Computer Graphices",
        bookAuthor:"Pradeep K. Bhatia",
        bookImage:cg,
        readingProcess:100,
        bookGener:"Computer",
        Desc:"The research and techniques that have been developed have led to this updated coverage of compilers. The book covers topics such as fine state machines, context-free grammars and syntax-directed translations. It also contains an introduction to the compiler design.",
        lastOpened:"Yesterday"
    }
]

export default books;