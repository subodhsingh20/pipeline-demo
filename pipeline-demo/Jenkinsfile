pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/YOUR_USERNAME/pipeline-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t pipeline-demo .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 pipeline-demo'
            }
        }
    }
}