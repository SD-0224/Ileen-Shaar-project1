import "./App.css";
import { Details } from "./pages/details/details";
import { Topics } from "./pages/home/topics";
import { Footer } from "./shared/components/footer";
import { Header } from "./shared/components/header";
import { WelcomeSection } from "./shared/components/welcome";

function App() {
  const link = window.location.href;

  return (
    <>
      <Header />
      <WelcomeSection />
      <main>
        {link.includes("details") ? (
          <Details
            data={{
              category: "Web Development Languages",
              rating: 4.09,
              name: "Emily Chen",
              image: "ajax.gif",
              topic: "JavaScript",
              description:
                "JavaScript is a high-level programming language that is used to create interactive web pages and dynamic user interfaces. It allows for the creation of complex, responsive web applications that can run both on the client side (in the web browser) and the server side (using Node.js). JavaScript is one of the most widely-used programming languages in web development.",
              subtopics: [
                "JavaScript data types and variables",
                "JavaScript functions and control flow",
                "JavaScript objects and classes",
                "JavaScript DOM manipulation and events",
                "JavaScript asynchronous programming and callbacks",
                "JavaScript frameworks and libraries (React, Angular, Vue)",
              ],
              id: 3,
            }}
          />
        ) : (
          <Topics
            topics={[
              {
                topic: "HTML",
                name: "Ileen",
                image: "ajax.gif",
                rating: 4,
                category: "Web Development Concepts and Technologies",
              },
              {
                topic: "CSS",
                name: "Ileen",
                image: "accessibility.png",
                rating: 4,
                category: "Web Development Concepts and Technologies",
              },
            ]}
          />
        )}

        <Footer />
      </main>
    </>
  );
}
export default App;
