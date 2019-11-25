# CPE 1040 - Introduction to Computer Engineering
# Assignment 8

## Visualize Simple Continuous Signals: 
#### The following signals were visualized, using the Auto regime and default settings (trigger on a rising edge on CH1):

#### a. Configured the OUT of the built-in function generator on the workstation. 
   
   Video URL:  https://imgur.com/gallery/n9Zj0Kd

#### b. Configured the standalone Rigol function generator properly onto the oscilloscope.
   
   Video URL: https://imgur.com/gallery/HaW4E5u
   
#### c. Wrote a one-line micro:bit program to set an analog pin to emit PWM pulses.

   Link to code file: [Here](pwm-pulses.js)
   
   Video URL: https://imgur.com/gallery/NOSbxNj
   
#### d. Wrote a loop that varies the duty cycle, up and down, between 5% and 95%, in steps of 5%.

   Link to code file: [Here](cycle-5-percent.js)
   
   Video URL: https://imgur.com/gallery/KbkGT4m

#### e. Explored the other servo function, using the oscilloscope, and wrote a small program to demo the operation. 

   Link to code file: [Here](other-servo.js)
   
   Video URL: https://imgur.com/gallery/RSmr2Qx
   
## I2C Warmup:
1Q. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?

#### 1A: I2C is intended to allow multiple "slave" chips to communicate with one or more "master" chips (allowing more than one master to communicate with all devices on the bus), only intended for short distance communications within a single device, and it only requires two signal wires to exchange information. Those two wires can support up to 1008 slave devices. The UART at either end is relatively complex to accurately implement in software if necessary. Most UART devices only support a certain set of fixed baud rates, and the highest of these is usually around 230400 bits/second.A drawback of SPI is the number of pins required, connecting a single master to a single slave with an SPI bus requires four lines; each additional slave requires one additional chip select I/O pin on the master. Also, the large amount of connections for each device can make routing signals more difficult in tight PCB layout situations.

2Q. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?

#### 2A: Each I2C bus consists of two signals: SCL and SDA. SCL is the clock signal (), and SDA is the data signal (). The clock signal is always generated by the current bus master.

3Q. What distinguishes the master and the slaves?

#### 3A:

4Q. How are the two types of protocol frames different?

#### 4A:

5Q. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?

#### 5A:

6Q. (Advanced) If the micro:bit is configured by default as a master, and two micro:bits, connected to each other via the SDA and SCL lines, communicate over I2C? (Bonus for a convincing argument, one way or another.)

#### 6A:

## First Steps with I2C:
#### 1. In a loop, configured the micro:bit to write a number to some arbitrary I2C address. Then, captured an I2C frame on the oscilloscope (Picture below).
   
    a. What frame did you capture?
    
    #### A:
   
    b. What does the I2C write function do when there is nothing connected?
    
    #### A:
    
    c. Is there a difference in what you capture if you write a number to one of the internal device addresses?
    
    #### A:

Link to code file: [Here](arbitrary-address.js)
    
(1)Picture of Oscilloscope Display: ![Arbitrary Address Display](4i-aa.png)

(1)Picture of Setup: ![Arbitrary Address Display Setup](setup-img.png)

    
#### 2. Wrote a short program to read a number from the I2C devices on the micro:bit. For each device:

    a. Try all three addresses. (Bonus for a cogent argument about why there are three.)
    
    b. Try signed and unsigned single byte integers.
    
    c. Scroll the values on the LED matrix.


#### (Address) Accelerometer:

#### Unsigned:
      
         Q: What values do you read?
         
         A:
    
         Q: Can you get different values by moving the micro:bit around?
         
         A:
      
   Link to code file: [Here](accelerometer-unsigned.js)
         
   Video URL: https://imgur.com/gallery/KfYUEAf
         
   Oscilloscope Display: ![Accelerometer-Unsigned Display](Acc-unsigned.png)
   
#### Signed:
      
         Q: What values do you read?
         
         A:
    
         Q: Can you get different values by moving the micro:bit around?
         
         A:
   
   Link to code file: [Here](accelerometer-signed.js)
         
   Video URL: https://imgur.com/gallery/JK22Uvj
         
   Oscilloscope Display: ![Accelerometer-Signed Display](Acc-signed.png)
   

#### (Address) Magnetometer:

#### Unsigned:
      
         Q: What values do you read?
         
         A:
    
         Q: Can you get different values by moving the micro:bit around?
         
         A:
   
   Link to code file: [Here](magnetometer-unsigned.js)
         
   Video URL: https://imgur.com/gallery/iXi7dsY
         
   Oscilloscope Display: ![Magnetometer-Unsigned Display](mag-unsigned-true.png)
   
#### Signed:
      
         Q: What values do you read?
         
         A:
    
         Q: Can you get different values by moving the micro:bit around?
         
         A:
   
   Link to code file: [Here](magnetometer-signed.js)
         
   Video URL: https://imgur.com/gallery/mBPBcoF
         
   Oscilloscope Display:![Magnetometer-Signed Display](mag-signed-true.png)
