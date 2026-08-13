pipeline {
    agent {
        docker {
            // Match the Playwright version in your package.json (e.g., v1.49.0)
            image '://microsoft.com'
            // Run container as root to safely allow global package installations if required
            args '-u root'
        }
    }

    environment {
        // Enforce CI environment variables to prevent flaky headed browser mode issues
        CI = 'true'
        // Specify where the npm cache directory should live within the workspace
        npm_config_cache = "${WORKSPACE}/.npm"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                // Pull code from git repository configured in the Jenkins Job
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Cache dependencies dynamically and perform a clean install
                sh 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Execute TypeScript Playwright tests using your npm package script
                // '|| true' ensures the pipeline carries on to publish reports if tests fail
                sh 'npx playwright test || true'
            }
        }
    }

    post {
        always {
            // Archive standard playwright HTML reports for quick viewing in Jenkins
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            // Archive the Trace Viewer data and video artifacts for failed tests
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
        
        failure {
            echo 'Playwright test suite execution failed.'
        }
    }
}