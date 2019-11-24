# CPE 1040 - Introduction to Computer Engineering
# Assignment 8

### Visualize Simple Continuous Signals: 
The following signals were visualized, using the Auto regime and default settings (trigger on a rising edge on CH1):

a. Configured the OUT of the built-in function generator on the workstation. 
   
   Video URL:  https://imgur.com/gallery/n9Zj0Kd

b. Configured the standalone Rigol function generator properly onto the oscilloscope.
   
   Video URL: https://imgur.com/gallery/HaW4E5u
   
c. Wrote a one-line micro:bit program to set an analog pin to emit PWM pulses.

   Link to code file: [Here](here.js)
   
   Video URL:
   
d. Wrote a loop that varies the duty cycle, up and down, between 5% and 95%, in steps of 5%.

   Link to code file: [Here](here.js)
   
   Video URL:

e. Explored the other servo function, using the oscilloscope, and wrote a small program to demo the operation. 

   Link to code file: [Here](here.js)
   
   Video URL:
   
### I2C Warmup:
1Q. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?

1A:

2Q. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?

2A:

3Q. What distinguishes the master and the slaves?

3A:

4Q. How are the two types of protocol frames different?

4A:

5Q. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?

5A:

6Q. (Advanced) If the micro:bit is configured by default as a master, and two micro:bits, connected to each other via the SDA and SCL lines, communicate over I2C? (Bonus for a convincing argument, one way or another.)

6A:

### First Steps with I2C:
1. In a loop, configured the micro:bit to write a number to some arbitrary I2C address. Then, captured an I2C frame on the oscilloscope (Picture below).
   
    a. What frame did you capture?
   
    b. What does the I2C write function do when there is nothing connected?
    
    c. Is there a difference in what you capture if you write a number to one of the internal device addresses?

Link to code file: [Here](here.js)
    
(1)Picture of Oscilloscope Display:

(1)Picture of Setup:
    
2. Wrote a short program to read a number from the I2C devices on the micro:bit. For each device:

    a. Try all three addresses. (Bonus for a cogent argument about why there are three.)
    
    b. Try signed and unsigned single byte integers.
    
    c. Scroll the values on the LED matrix.

(Address) Accelerometer:

      Unsigned:
      
         Q: What values do you read?
         
         A:
    
         Q: Can you get different values by moving the micro:bit around?
         
         A:
      
         Link to code file: [Here](here.js)
         
         Video URL:
         
         Oscilloscope Display:
   
      Signed:
      
         Q: What values do you read?
         
         A:
    
         Q: Can you get different values by moving the micro:bit around?
         
         A:
   
         Link to code file: [Here](here.js)
         
         Video URL:
         
         Oscilloscope Display:
   
(Address) Magnetometer:

      Unsigned:
      
         Q: What values do you read?
         
         A:
    
         Q: Can you get different values by moving the micro:bit around?
         
         A:
   
         Link to code file: [Here](here.js)
         
         Video URL:
         
         Oscilloscope Display:
   
      Signed:
      
         Q: What values do you read?
         
         A:
    
         Q: Can you get different values by moving the micro:bit around?
         
         A:
   
         Link to code file: [Here](here.js)
         
         Video URL:
         
         Oscilloscope Display:
