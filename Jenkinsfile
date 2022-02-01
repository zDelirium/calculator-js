pipeline { 
    agent any

    tools {nodejs "Node 17.4.0"}

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // With java, mvn clean verify also ran the test, but not npm install
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        
    }
}