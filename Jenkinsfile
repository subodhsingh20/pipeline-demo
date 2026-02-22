pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Cleanup Old Container') {
            steps {
                sh 'docker rm -f pipeline-demo || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t pipeline-demo .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d --name pipeline-demo -p 3000:3000 pipeline-demo'
            }
        }
    }
}