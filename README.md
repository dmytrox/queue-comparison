# Redis AOF, RDB and Beanstalkd queue performance comparison

To run app just type this in your teminal


```
make up
```

> Then to test queue manager go inside app dir and then choose prefered stack and type in your teminal 

```
npm run sub

npm run pub 
```

# Tests

| Queue Manager | sec |
|-----------|------------|
| beanstalkd | 334 |
| rdb | 328 |
| aof | 344 |
