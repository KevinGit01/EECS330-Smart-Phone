clear
clc

day = ["Monday","Tuesday","wensday","Thursday","Friday","Saturday","Sunday"];
u1 = 10*rand(7,1);
day = day';
daily = [day,u1];

fname='daily.csv';
writetable(cell2table([day num2cell(u1),fname,'writevariablenames',0));

mon = ["Jan","Feb","Mar","Apr","May","Jun","July"];
u2 = 10*30*rand(7,1);
mon = mon';
month = [mon,u2]

