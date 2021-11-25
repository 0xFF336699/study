dockerrm express1_rabbit_prod && \
TEMP_IP=`uuidgen -r` && \
docker run -d --hostname express1_rabbit_prod \
--name express1_rabbit_prod \
-v /work/express/rabbitmq/express1/data/:/var/lib/rabbitmq:z \
-v /work/express/rabbitmq/express1/transfershipment/:/transfershipment:z \
-p 15673:15671 -p 15674:15672 -p 25673:25672 -p 4370:4369 -p 5673:5671 -p 5674:5672 \
-l SERVICE_15673_IGNORE=true  \
-l SERVICE_25673_IGNORE=true  \
-l SERVICE_4370_IGNORE=true  \
-l SERVICE_5673_IGNORE=true    \
-e RABBITMQ_DEFAULT_USER=0xFF336699 \
-e RABBITMQ_DEFAULT_PASS=fanfanlo \
-l "SERVICE_15672_NAME=rabbitmq-express1-web"  \
-l "SERVICE_15672_TAGS=mq1-express1-web" \
-l "SERVICE_15672_ID=15674.${TEMP_IP}"  \
-l "SERVICE_5672_TAGS=mq1-express" \
-l "SERVICE_5672_ID=${TEMP_IP}" \
-l "SERVICE_5672_NAME=rabbitmq-express1" rabbitmq:3.8.14-management-alpine
	
	
	
	SERVICE_5672_NAME这个端口对应容器的内部端口