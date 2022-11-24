//1. A user lands on the home page and finds one of the courses.
//2. They click on the “Get started” button and are taken to the course landing page.
//3. They click on the “Start Course” button and are taken to the first lesson of that course.
//4. They read the lesson and complete the quiz at the bottom.
//5. After answering the quiz correctly, they click on the “Next Lesson” button and are taken to the next lesson.

describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
      cy.visit("http://localhost:3000")
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
      cy.getByData("next-lesson-button").click()
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/app-install-and-overview"
      )
  
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click()
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
      )
  
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click()
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/setting-up-data-before-each-test"
      )
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click()
  
      cy.location("pathname").should("eq", "/")
    })
  })  