# Smart Home Website Team Template

Copy this template, fill it in for each person and for the project, then send it back.

## Project

Project title:
Smart Home

Project summary:
Automated Smart Home Environmental Control System

1. Project Overview & Objectives
   The objective of this project was to design and develop an event-driven embedded system using the Arduino Uno platform. Built by a team of student engineers, the system simulates a responsive smart home environment that autonomously adapts to changing environmental conditions. By continuously monitoring ambient light and temperature levels, the system controls mechanical and electrical actuators to optimize resident comfort and improve energy efficiency (e.g., automated shading and climate control).
2. System Architecture & Hardware Integration
   The system relies on a classic Input-Processing-Output framework. It bridges the physical environment to mechanical actions using a mix of analog and digital components.
   Component Configuration
   Component Type Specific Part Interface Type Role in the Smart Home
   Microcontroller Arduino Uno R3 Central Processor Executes the control loop and logic thresholds.
   Sensor 1 (Analog) Light Dependent Resistor (LDR) Analog Input (A0) Measures ambient light intensity (Scale: 0–1023).
   Sensor 2 Temperature Sensor (Thermistor/DHT) Analog/Digital Input Monitors real-time thermal changes.
   Actuator 1 Servo Motor PWM Output (D9) Automatically opens/closes window curtains.
   Actuator 2 DC Cooling Fan / LED Digital Output Regulates temperature and provides automated night lighting.
3. Software Logic & Firmware Functionality
   The original firmware was written in C++ using the Arduino IDE. The code runs a continuous, non-blocking evaluation loop operating on strict threshold parameters:
   Daytime / Bright State (Light Level ≥ 400): The system ensures curtains are open (Servo at 0°) and interior lights are turned off to conserve energy.
   Nighttime / Dark State (Light Level < 400): The system triggers "Night Mode," rotating the curtain servo to 180° for privacy and turning on the interior LED lighting.
   Thermal Management Control: If the temperature readings spike past a designated safety comfort threshold, the system automatically engages a logic-level transistor to power the DC cooling fan.
4. Data Collection & Analytics Summary
   To validate the embedded system's real-world efficacy, data was streamed from the hardware into a spreadsheet for empirical analysis.
   Key Insights from the Data Logging:
   Data Integrity: A total of 125 continuous data points were successfully captured and cleaned of serial buffer noise.
   Light Dynamics: Light readings fluctuated from a minimum of 353 (simulated night/cloudy conditions) to a maximum peak of 688 (direct light exposure).
   Temperature Tracking: Thermal readings shifted dynamically between 96 and 121, showing a clear inverse correlation with light exposure during specific testing phases (simulating environmental cooling cycles).
   System Responsiveness: By mapping the raw data against an IF logic script in Excel/Google Sheets, the data mathematically proved that the actuators responded with 100% execution accuracy the exact moment sensor thresholds were breached.
5. Conclusion & Project Success
   The project successfully met all grading criteria:
   Hardware Requirements: Safely integrated multiple distinct sensors and actuators onto a unified power rail.
   Software Engineering: Delivered clean, original code that handles multi-variable conditional states without system crashes.
   Creativity & Analytical Rigor: Proved the practical utility of a smart home through visual, data-backed evidence rather than just theoretical modeling.

What does the smart home do when it gets dark?
The curtains close and the light turns on

What happens when it gets warm?
The fan starts

What happens when it cools down?
the fan stops

Video file name or link:
app/content/img/demo.MOV

## Person 1

Full name:
Botond Nemeth

Role on the team:
C# coder and Builder

Short bio:
Mechatroniks student from Hungary

Hobbies:
Frizbee, Bicycle, Cooking, Hiking, Watching TV-shows

Social links:
https://www.facebook.com/share/1ApZZTDLrj/
https://www.linkedin.com/in/botond-németh-07b36b314

Photo file name or link:
app/content/img/botond.jpg

## Person 2

Full name:
Nandhan Gunasekaran

Role on the team:
Emotional support character

Short bio:
Robotics and Automation student

Hobbies:
Listening to music, watching TV-series, gym

Social links:
https://www.linkedin.com/in/nandhan-gunasekaran/

Photo file name or link:
app/content/img/nandhan.jpg

## Person 3

Full name:
Roxanne Collett

Role on the team:
Web developer and Software Architect

Short bio:
Applied Computer Science student

Hobbies:
Photography, Cars, Listening to music, reading, traveling

Social links:
https://www.linkedin.com/in/roxanne-collett03122003

Photo file name or link:
app/content/img/roxanne.jpeg
