pipeline {
  environment {
    imagename = "yenigul/hacicenkins"
    registryCredential = 'yenigul-dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    // stage('Cloning Git') {
    //   steps {
    //     git([url: 'https://github.com/ismailyenigul/hacicenkins.git', branch: 'master', credentialsId: 'ismailyenigul-github-user-token'])

    //   }
    // }
    // stage('Building image') {
    //   steps{
    //       sh 'docker build . -t mycustomimage'
        // script {
        //   dockerImage = docker.build imagename
        // }
    //   }
    // }
    stage('Building and Running image') {
      steps{
          sh 'docker-compose up -d --build'
        //   sh 'docker run -p 3001:8083'
        // script {
        //   dockerImage = docker.build imagename
        // }
      }
    }

    stage('Run tests') {
      steps{
        //   sh 'npm install -g yarn'
        //   sh 'yarn add -D cypress @testing-library/cypress'
        // sh 'npm install react-scripts'
        sh 'npm test start'
          sh 'yarn run cypress open'
        //   sh 'docker run -p 3001:8083'
        // script {
        //   dockerImage = docker.build imagename
        // }
      }
    }

    // stage('Cleaning after images') {
    //   steps{
    //       sh 'docker-compose down'
    //       sh 'docker rm -f $(docker ps -aq)'
    //   }
    // }
    // stage('Deploy Image') {
    //   steps{
    //     script {
    //       docker.withRegistry( '', registryCredential ) {
    //         dockerImage.push("$BUILD_NUMBER")
    //          dockerImage.push('latest')

    //       }
    //     }
    //   }
    // }
    // stage('Remove Unused docker image') {
    //   steps{
    //     sh "docker rmi $imagename:$BUILD_NUMBER"
    //      sh "docker rmi $imagename:latest"

    //   }
    // }
  }
}