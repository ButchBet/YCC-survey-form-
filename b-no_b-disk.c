#include <stdio.h>


int main () {
  int quantity[3], pay_type;
  char article[3][10] = {{"book"}, {"note-book"}, {"disk"}};
  float ar_cost[3] = {10, 15, 7}, discount[4] = {0.80, 1, 0.85, 0.94}, ind:cost][3], final_cost = 0;

  // loop to can read each article's quantity and multiply it per each discount and the cost of each article
  for (int i = 0; i < 3; i++){
    printf("\nEnter the quantyty of %s(s): ", article[i][0]); scanf("%i", &quantity[i]);
    ind_cost[i] = ar_cost[i]*quantity[i]*discount[i];
  }

  // loop to add all of the ind_cost in one variable that is the final_cost
  for(int i = 0; i < 3; i++){
    final_cost += ind_cost[i];
  }
  // conditional to know if the customer will pay by cash or in installments
  printf("\nThe payment is by cash: 1 or in installments: other digit: ");
  scanf("%i", &pay_type);
if(pay_type == 1){
  if (pay_type == 1){
    final_cost *= discount[3];
    
    
  }
  return 0;
}
