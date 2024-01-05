<template>
    <v-container>
      <v-card class="mx-auto p-4" max-width=700px>
        <v-card-title>{{ currentQuestion.title }}</v-card-title>
        <v-card-text>
          <p>{{ currentQuestion.description }}</p>
          <v-radio-group v-model="currentQuestion.selectedAnswer" class="space-form">
            <v-radio v-for="(choice, index) in currentQuestion.choices" :key="index" :label="choice.text" :value="index">
            </v-radio>
          </v-radio-group>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" size="large" @click="previousQuestion" variant="elevated" v-if="currentQuestionIndex > 0">
            Previous
          </v-btn>
          <v-btn color="success" size="large" @click="nextQuestion" variant="elevated" v-if="currentQuestionIndex < questions.length - 1">
            Next
          </v-btn>
          <v-btn color="success" size="large" @click="submitQuiz" variant="elevated" v-else>
            Submit
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mt-2">
          <v-spacer></v-spacer>
          <v-icon
            v-for="(question, index) in questions"
            :key="index"
            :color="getDotColor(index)"
            class="mr-2"
            @click="goToQuestion(index)"
            style="cursor: pointer"
          >
            mdi-circle
          </v-icon>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentQuestionIndex: 0,
        questions: [
          {
            title: 'Question 1',
            description: 'Test 1',
            choices: [
              { text: 'Option A', grade: 5 },
              { text: 'Option B', grade: 10 },
              { text: 'Option C', grade: 7 },
              { text: 'Option D', grade: 3 },
            ],
            selectedAnswer: null,
          },
          {
            title: 'Question 2',
            description: 'Test 2',
            choices: [
              { text: 'Option A', grade: 8 },
              { text: 'Option B', grade: 6 },
              { text: 'Option C', grade: 4 },
              { text: 'Option D', grade: 2 },
            ],
            selectedAnswer: null,
          },
          {
            title: 'Question 3',
            description: 'Test 3',
            choices: [
              { text: 'Option A', grade: 3 },
              { text: 'Option B', grade: 12 },
              { text: 'Option C', grade: 9 },
              { text: 'Option D', grade: 6 },
            ],
            selectedAnswer: null,
          },
          {
            title: 'Question 4',
            description: 'Test 4',
            choices: [
              { text: 'Option A', grade: 7 },
              { text: 'Option B', grade: 5 },
              { text: 'Option C', grade: 10 },
              { text: 'Option D', grade: 2 },
            ],
            selectedAnswer: null,
          },
        ],
        userScore: 0,
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      },
    },
    methods: {
      nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
        } else {
          // Handle the completion of the quiz, e.g., submit answers or show results
          alert('Quiz completed! Your total score is ' + this.userScore);
        }
      },
      previousQuestion() {
        if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--;
        }
      },
      submitQuiz() {
        // Calculate user's total score
        this.userScore = this.calculateTotalScore();
        // Handle submitting the quiz, e.g., sending answers to a server
        alert('Quiz submitted! Your total score is ' + this.userScore);
      },
      getDotColor(index) {
        return index === this.currentQuestionIndex ? 'primary' : this.questions[index].selectedAnswer !== null ? 'success' : 'error';
      },
      goToQuestion(index) {
        this.currentQuestionIndex = index;
      },
      calculateTotalScore() {
        return this.questions.reduce((total, question) => {
          if (question.selectedAnswer !== null) {
            return total + question.choices[question.selectedAnswer].grade;
          } else {
            return total;
          }
        }, 0);
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  