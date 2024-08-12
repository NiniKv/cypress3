
let email = (Math.random() + 1).toString(36).substring(7) + "@gmail.com";
let password = (Math.random() + 1).toString(36).substring(7);


describe('Register User', () => {
    it('Test Case 1: Register User ', () => {
      cy.visit('https://automationexercise.com/') 


        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.contains ("Home").should("be.visible")

        // 4. Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // 5. Verify 'New User Signup!' is visible
        cy.get('.signup-form > h2').should("have.text", "New User Signup!")

        // 6. Enter name and email address
        cy.get('[data-qa="signup-name"]').click()
        cy.get('[data-qa="signup-name"]').type("Nini")
        cy.get('[data-qa="signup-email"]').click()
        cy.get('[data-qa="signup-email"]').type(email)

        // 7. Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click()

        // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.contains("Enter Account Information").should("be.visible")

        // 9. Fill details: Title, Name, Email, Password, Date of birth
        cy.get('#id_gender2').click()
        cy.get('[data-qa="password"]').type(password)
        cy.get('[data-qa="days"]').select("16")
        cy.get('[data-qa="months"]').select("June")
        cy.get('[data-qa="years"]').select("1999")

        // 10. Select checkbox 'Sign up for our newsletter!'
        cy.contains("label", "Sign up for our newsletter!").click()

        // 11. Select checkbox 'Receive special offers from our partners!'
        cy.contains("label", "Receive special offers from our partners!").click()

        // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get('[data-qa="first_name"]').type("Nini")
        cy.get('[data-qa="last_name"]').type("Kvaratskhelia")
        cy.get('[data-qa="company"]').type("Rainbow")
        cy.get('[data-qa="address"]').type("Rustavelis2")
        cy.get('[data-qa="address2"]').type("Vajas7")
        cy.get('[data-qa="country"]').select("United States")
        cy.get('[data-qa="state"]').type("Florida")
        cy.get('[data-qa="city"]').type("Miami")
        cy.get('[data-qa="zipcode"]').type("33101")
        cy.get('[data-qa="mobile_number"]').type("(305) 555-1234")

        // 13. Click 'Create Account button'
        cy.get('[data-qa="create-account"]').click()

        // 14. Verify that 'ACCOUNT CREATED!' is visible
        cy.contains("Congratulations! Your new account has been successfully created!").should("be.visible")

        // 15. Click 'Continue' button
        cy.get('[data-qa="continue-button"]').click()

        // 16. Verify that 'Logged in as username' is visible
        cy.contains("Logged in as").should("be.visible")

     })
    })

    describe('Login User with correct email and password', () => {
        it('Test Case 2: Login User with correct email and password ', () => {
          cy.visit('https://automationexercise.com/') 
        
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.contains ("Home").should("be.visible")

        // 4. Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // 5. Verify 'Login to your account' is visible
        cy.contains("Login to your account").should("be.visible")

        // 6. Enter correct email address and password
        cy.get('[data-qa="login-email"]').type("Nini.kv16!@gmail.com")
        cy.get('[data-qa="login-password"]').type("Qwerty123")

        // 7. Click 'login' button
        cy.get('[data-qa="login-button"]').click()

        // 8. Verify that 'Logged in as username' is visible
        cy.contains("Logged in as").should("be.visible")

    })
})
         
        
 describe('Login User with incorrect email and password', () => {
    it('Test Case 3: Login User with incorrect email and password', () => {
      cy.visit('https://automationexercise.com/') 

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.contains ("Home").should("be.visible")

        // 4. Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // 5. Verify 'Login to your account' is visible
        cy.contains("Login to your account").should("be.visible")

        // 6. Enter incorrect email address and password
        cy.get('[data-qa="login-email"]').type("Ninik@gmail.com")
        cy.get('[data-qa="login-password"]').type("Qwerty111")

        // 7. Click 'login' button
        cy.get('[data-qa="login-button"]').click()

        // 8. Verify error 'Your email or password is incorrect!' is visible
        cy.contains("Your email or password is incorrect!").should("be.visible")

        })
})